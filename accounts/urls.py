from django.urls import path
from accounts.views import home, create_new_user
app_name = 'accounts'



urlpatterns = [
     path('', home, name='home'),
     path('register/', create_new_user, name='register'),
]
