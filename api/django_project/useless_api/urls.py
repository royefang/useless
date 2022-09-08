from django.urls import path
from useless_api import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('useless-facts/', views.useless_fact_list),
    path('useless-facts/<int:pk>/', views.useless_fact_detail),
    path('useless-facts/random/', views.useless_fact_random),
]

urlpatterns = format_suffix_patterns(urlpatterns)