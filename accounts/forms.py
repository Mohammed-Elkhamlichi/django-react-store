from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.db.models import fields
from django.forms.widgets import PasswordInput


class NewUserForm(UserCreationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={
        "class": "form-control",
        "placeholder": "UserName"
    }))
    email = forms.EmailField(widget=forms.EmailInput(attrs={
        "class": "form-control",
        "placeholder":'Email'
    }))
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={
        "class": "form-control",
        'placeholder': 'Password'
    }))
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={
        "class": 'form-control',
        "placeholder": "confirm your password"
    }))


    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')

    def save(self, commit:True):
        return super().save(commit=commit)

    

    