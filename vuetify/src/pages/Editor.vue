<template>
  <div class="page-container">
    <v-container>
      <div class="content">
        <h1 class="page-title">Media Editor</h1>

        <div class="section">
          <p>
            Basic editor - will polish later. Coming soon with FFmpeg integration!
            A web-based media processing tool for video and audio editing.
          </p>
        </div>

        <div class="section">
          <h2 class="section-title">Features</h2>

          <div class="item">
            <h3 class="item-title">Video/Audio Upload</h3>
            <p>Support for multiple media formats with drag-and-drop interface.</p>
          </div>

          <div class="item">
            <h3 class="item-title">Basic Editing Tools</h3>
            <p>Cut, trim, merge, and apply basic effects to your media files.</p>
          </div>

          <div class="item">
            <h3 class="item-title">FFmpeg Integration</h3>
            <p class="item-meta">Coming Soon</p>
            <p>Advanced processing capabilities with FFmpeg backend integration.</p>
          </div>

          <div class="item">
            <h3 class="item-title">Export Functionality</h3>
            <p>Export processed media in various formats and quality settings.</p>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">Development Status</h2>
          <div class="item">
            <h3 class="item-title">Current Phase</h3>
            <p class="item-meta">Alpha Development</p>
            <p>
              This editor is currently in active development. Core features are being implemented
              with a focus on performance and user experience.
            </p>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
@import '@/styles/pages.css';
</style>
