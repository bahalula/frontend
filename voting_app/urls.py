"""
URL configuration for voting_app project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.shortcuts import render 
from django.urls import path
from rest_framework.routers import DefaultRouter
from features.views import FeatureListCreateView, FeatureUpvoteView
from django.http import HttpResponse


urlpatterns = [
    path("", lambda request: render(request, "home.html")),
    path("api/features/", FeatureListCreateView.as_view(), name="features"),
    path("api/features/<int:pk>/upvote/", FeatureUpvoteView.as_view(), name="feature-upvote"),
    path("admin/", admin.site.urls),
]

