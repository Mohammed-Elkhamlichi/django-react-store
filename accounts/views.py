from django.shortcuts import render
from django.http import HttpResponse
from accounts.forms import NewUserForm

# Create your views here.


def home(request):
    return render(request, 'accounts/home.html', context={"dev": "MEM"})



def create_new_user(request):
    register_form = NewUserForm()

    if request.method == 'POST':
        print('request')
    context = {
        'register_form': register_form
    }

    return render(request, 'accounts/register_user.html', context)

