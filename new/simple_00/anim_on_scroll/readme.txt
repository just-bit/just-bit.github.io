Анимируемый объект должен находиться 
в статическом контейнере
.container {overflow: hidden;}
._anim-items (js сам добавялет ._active)

=======================================
.container._anim-items
  .inner.my-anim

.container {overflow: hidden;}
.my-anim {opacity: 0;}
._active .my-anim {opacity: 1;}
========================================
.container
  .inner._anim-items.my-anim

.container {overflow: hidden;}
.my-anim {opacity: 0;}
._active.my-anim {opacity: 1;}
=======================================