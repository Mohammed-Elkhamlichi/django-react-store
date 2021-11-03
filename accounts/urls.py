from django.urls import path
from accounts.views import home
app_name = 'accounts'



urlpatterns = [
     path('', home, name='home')
]
