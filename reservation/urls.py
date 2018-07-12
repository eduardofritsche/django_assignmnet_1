from django.conf.urls import url

from . import views

app_name = 'reservation'

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^confirmation/$', views.confirmation, name='confirmation'),
]