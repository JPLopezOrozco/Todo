from .models import Task
from .serializers import TaskSerializer
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination


class CustomPagination(PageNumberPagination):
    page_size_query_param = '_limit'
    max_page_size = 100

class ApiView(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    pagination_class = CustomPagination
