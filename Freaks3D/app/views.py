from django.shortcuts import render

# Create your views here.
def inicio(request):
    return render(request, 'index.html')
def productos(request):
    return render(request, 'productos.html')
def contacto(request):
    return render(request, 'contacto.html')
def personalizables(request):
    return render(request, 'personalizables.html')