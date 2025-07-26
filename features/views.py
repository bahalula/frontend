from rest_framework import generics, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Feature
from .serializers import FeatureSerializer
from django.db.models import F

class FeatureListCreateView(generics.ListCreateAPIView):
    queryset = Feature.objects.all().order_by('-votes', '-created_at')
    serializer_class = FeatureSerializer

class FeatureUpvoteView(generics.UpdateAPIView):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer

    def update(self, request, *args, **kwargs):
        feature = self.get_object()
        feature.votes += 1
        feature.save()
        return Response(self.get_serializer(feature).data,
                        status=status.HTTP_200_OK)

    """
    Increment the vote counter on POST /api/features/<id>/upvote/
    """
    def post(self, request, pk):
        feature = get_object_or_404(Feature, pk=pk)
        feature.votes = F("votes") + 1
        feature.save()
        feature.refresh_from_db()
        return Response(FeatureSerializer(feature).data, status=200)