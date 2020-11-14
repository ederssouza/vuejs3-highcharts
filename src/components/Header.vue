<template>
  <div>
    <div class="doc__bg"></div>
    <nav class="header">
      <h1 class="logo">
        <span class="logo__thin">Vue.js</span> Highcharts
      </h1>

      <ul class="menu">
        <div class="menu__item toggle"><span></span></div>
        <li class="menu__item">
          <a href="https://github.com/ederssouza/vuejs-highcharts" class="link link--dark" target="_blank">
            <i class="fa fa-github"></i> Github
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.doc__bg {
  background-color: var(--bg-color);
  bottom: 0;
  left: 0;
  position: fixed;
  top: 0;
  width: 28%;
  z-index: -1;
}

.header {
  background-color: #fff;
  border-bottom: 1px solid var(--code-bg-color);
  grid-template-columns: 1fr 150px 60% 1fr;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}

.logo {
  font-weight: 900;
  color: var(--primary-color);
  font-size: 1.4em;
  grid-column: 2;
  white-space: nowrap;
}

.logo__thin {
  font-weight: 300;
}

.menu {
  grid-template-columns: 1fr 180px 60% 1fr;
}

.menu__item {
  padding: 1.5rem 1rem;
}

nav {
  display: grid;
  grid-template-columns: 70px auto;
}

.menu {
  align-items: center;
  display: flex;
  margin: 0;
  text-align: right;
  overflow: hidden;
  list-style: none;
  justify-content: flex-end;
}

.toggle {
  display: none;
  position: relative;
}

.toggle span,
.toggle span:before,
.toggle span:after {
  content: '';
  position: absolute;
  height: 2px;
  width: 18px;
  border-radius: 2px;
  background: var(--primary-color);
  display: block;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  right: 0;
}

.toggle span:before {
  top: -6px;
}

.toggle span:after {
  bottom: -6px;
}

.toggle.open span{
  background-color: transparent;
}

.toggle.open span:before,
.toggle.open span:after {
  top: 0;
}

.toggle.open span:before {
  transform: rotate(45deg);
}

.toggle.open span:after {
  transform: rotate(-45deg);
}

.menu__item {
  padding: 1rem;
  display: inline-block;
}

.menu__item.toggle {
  display: none;
}

@media screen and (max-width: 600px) {
  nav {
    grid-template-columns: 70px auto;
  }

  .menu__item{
    display: none;
  }

  .menu__item.toggle {
    display: inline-block;
  }

  .menu {
    text-align: right;
    padding: 0.5rem 1rem;
  }

  .toggle {
    display: block;
  }

  .menu.responsive .menu__item:not(:first-child) {
    display: block;
    padding: 0 0 0.5rem 0;
  }
}
</style>
