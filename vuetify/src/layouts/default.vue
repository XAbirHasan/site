<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar
      app
      color="transparent"
      elevation="0"
      flat
      height="64"
    >
      <v-container class="d-flex align-center justify-space-between px-4">
        <!-- Logo/Brand -->
        <router-link class="brand-link" to="/">
          <span class="brand-text text-h6">Abir</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="d-none d-md-flex align-center ga-6">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/work">Work</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/editor">Editor</router-link>

          <!-- Theme Toggle -->
          <v-btn
            class="theme-btn ml-4"
            icon
            size="small"
            variant="text"
            @click="toggleTheme"
          >
            <v-icon size="16">{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
          </v-btn>
        </div>

        <!-- Mobile Menu Button -->
        <v-btn
          class="d-md-none"
          icon
          variant="text"
          @click="drawer = !drawer"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      location="end"
      temporary
    >
      <v-list>
        <v-list-item to="/" @click="drawer = false">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item to="/work" @click="drawer = false">
          <v-list-item-title>Work</v-list-item-title>
        </v-list-item>
        <v-list-item to="/about" @click="drawer = false">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item to="/editor" @click="drawer = false">
          <v-list-item-title>Editor</v-list-item-title>
        </v-list-item>
        <v-list-item @click="toggleTheme">
          <v-list-item-title>
            <v-icon class="mr-2">{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
            {{ isDark ? 'Light Mode' : 'Dark Mode' }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Footer -->
    <v-footer class="text-center pa-4" color="transparent">
      <div class="footer-content">
        <p class="text-body-2 mb-0">
          © {{ currentYear }} Md Abir Hassan. All rights reserved.
        </p>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();
const drawer = ref(false);

const isDark = computed(() => theme.global.current.value.dark);
const currentYear = computed(() => new Date().getFullYear());

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};
</script>

<style scoped>
.brand-link {
  text-decoration: none;
  color: inherit;
}

.nav-link {
  text-decoration: none;
  color: rgb(var(--v-theme-on-surface));
  font-weight: 400;
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  opacity: 1;
  color: rgb(var(--v-theme-primary));
}

.theme-btn {
  opacity: 0.7;
}

.theme-btn:hover {
  opacity: 1;
}

.footer-content {
  width: 100%;
  border-top: 1px solid rgba(var(--v-theme-outline), 0.12);
  padding-top: 16px;
}

.footer-content p {
  color: rgb(var(--v-theme-on-surface-variant));
}
</style>
