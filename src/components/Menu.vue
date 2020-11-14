<template>
  <aside class="doc__nav">
    <ul ref="navbar" id="navbar">
      <li
        v-for="(item, index) in items"
        :key="`item${index}`"
        class="js-btn"
      >
        <a
          :href="`#section${index}`"
          :title="item.label"
        >
          {{ item.label }}
        </a>
        <ul>
          <li
            v-for="(subitem, idx) in item.subitems"
            :key="`item${idx}`"
          >
            <a :href="`#section${idx + items.length}`" :title="subitem.label">
              {{ subitem.label }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
import VanillaScrollspy from 'vanillajs-scrollspy'

export default {
  name: 'Menu',
  data () {
    return {
      items: [
        { label: 'Instalation' },
        { label: 'How to use' },
        { label: 'Options' },
        {
          label: 'Examples',
          subitems: [
            { label: 'Basic chart' },
            { label: 'Area chart' },
            { label: 'Bar chart' },
            { label: 'Column chart' },
            { label: 'Scatter chart' },
            { label: 'Line chart' },
            { label: 'Pie chart' },
            { label: 'Combination chart' },
            { label: 'Custom styles' },
            { label: 'Rewrite all props' }
          ]
        }
      ]
    }
  },
  methods: {
    fixedMenu () {
      const navbar = this.$refs.navbar

      if (navbar) {
        if (window.pageYOffset > 0) {
          navbar.classList.add('fixed')
          return
        }

        navbar.classList.remove('fixed')
      }
    },
    setSectionId () {
      const sections = document.querySelectorAll('.section')
      sections.forEach((section, index) => section.setAttribute('id', `section${index}`))
    },
    initScrollSpy () {
      window.setTimeout(() => {
        const navbar = this.$refs.navbar
        this.setSectionId()

        if (navbar) {
          const scrollspy = new VanillaScrollspy(navbar)
          scrollspy.init()
        }
      }, 2000)
    }
  },
  mounted () {
    this.initScrollSpy()
    window.addEventListener('scroll', this.fixedMenu)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.fixedMenu)
  }
}
</script>

<style lang="scss" scoped>
.doc__nav {
  flex-basis: 20%;
  font-weight: 200;
  padding-top: 20px;
}

.doc__nav ul {
  list-style: none;
  padding-left: 0;
  line-height: 1.8;

  ul {
    padding-left: 8px;

    li {
      font-size: 13px;
    }
  }
}

.doc__nav ul.fixed {
  position: fixed;
  top: 100px;
}

.doc__nav li:hover {
  color: var(--primary-color-light);
  cursor: pointer;
  transition: color .3s ease-in-out;
}

.doc__nav .active {
  color: var(--accent-color);
  font-weight: 600;
  position: relative;
}

.doc__nav > ul > li > a {
  font-weight: 600;
}

.doc__nav .active:after {
  background-color: var(--accent-color);
  content: "";
  height: 1rem;
  left: -1.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
}

.doc__nav > ul > li > a + ul > li > a.active:after {
  height: 0.8rem;
  left: -1.5rem;
  width: 0.8rem;
}
</style>
