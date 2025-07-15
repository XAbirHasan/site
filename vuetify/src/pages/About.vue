<template>
  <div class="page-container">
    <v-container>
      <div class="content">
        <h1 class="page-title">About</h1>

        <div class="section">
          <p>
            Software Engineer with expertise in building scalable and secure multi-tenant cloud-based applications,
            specializing in AWS infrastructure, backend services, cloud-native solutions, and media & asset management (MAM) systems.
          </p>
        </div>

        <div class="section">
          <h2 class="section-title">Work Experience</h2>

          <div class="item">
            <h3 class="item-title">Software Development Engineer II</h3>
            <p class="item-subtitle">Craftsmensoftware (Consultant at Mimir)</p>
            <p class="item-meta">Dec 2023 – Present</p>
            <p>
              Led the Mimir Extension Team in developing cloud-native solutions for an enterprise media asset management platform,
              focusing on scalability, security, and AWS cloud integration.
            </p>
            <ul class="item-list">
              <li>Automated QA releases, reducing time by 98% using GitHub Actions</li>
              <li>Integrated MFA (TOTP) with AWS Cognito, enhancing security</li>
              <li>Eliminated XSS & code injection vulnerabilities</li>
              <li>Migrated 50% of Vue2 codebase to Vue3, improving performance & maintainability</li>
              <li>Developed FFmpeg-based audio downmixing and WebSocket-driven folder management</li>
              <li>Optimized search performance by reducing OpenSearch query execution time by 40%</li>
              <li>Increased file upload success rate by 95% through retry mechanisms</li>
              <li>Trained 50+ engineers at Craftsmen Excellence Academy on Git best practices</li>
            </ul>
          </div>

          <div class="item">
            <h3 class="item-title">Software Development Engineer I</h3>
            <p class="item-subtitle">Craftsmensoftware (Consultant at Mimir & Qbics media)</p>
            <p class="item-meta">Dec 2021 – Dec 2023</p>
            <p>
              Built a multi-tenant MAM system serving 4,000+ users across 15+ enterprises.
            </p>
            <ul class="item-list">
              <li>Engineered S3 multipart upload workflow with resumable support, reducing transfer failures by 95%</li>
              <li>Reduced deployment time by 40% with AWS CodePipeline & CodeBuild automation</li>
              <li>Developed real-time user & file tracking using AWS Lambda, DynamoDB, and SES</li>
            </ul>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">Education</h2>
          <div class="item">
            <h3 class="item-title">B.Sc. in Computer Science</h3>
            <p class="item-subtitle">United International University</p>
            <p class="item-meta">August 2021</p>
            <p>CGPA: 3.91</p>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">Research</h2>
          <div class="item">
            <h3 class="item-title">SuicideBD: A Suicidal Dataset for Bangladesh</h3>
            <p class="item-meta">Not published</p>
            <a class="external-link" href="https://doi.org/10.6084/m9.figshare.20222724" target="_blank">https://doi.org/10.6084/m9.figshare.20222724</a>
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
