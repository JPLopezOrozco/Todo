from .models import Task
from .serializers import TaskSerializer
from rest_framework import viewsets

class ApiView(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer