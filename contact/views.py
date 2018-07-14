from django.shortcuts import render

def index(request):
    return render(request, 'contact/index.html')

def confirmation(request):
    return render(request, 'contact/confirmation.html')
