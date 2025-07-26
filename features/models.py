from django.db import models

from django.db import models

class Feature(models.Model):
    title       = models.CharField(max_length=120)
    description = models.TextField(blank=True)
    votes       = models.PositiveIntegerField(default=0)
    created_at  = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

