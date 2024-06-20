from django.urls import path, include
from api import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'tasks', views.ApiView, basename="api-task")


urlpatterns=[
    path('', include(router.urls)),

]