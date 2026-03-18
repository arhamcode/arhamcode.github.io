---
title: "Flutter Navigation: Panduan Lengkap"
description: "Belajar cara menavigasi antar layar di Flutter dengan named routes, go_router, dan deep linking."
pubDate: 2024-01-15
tags: ["flutter", "navigation", "routing"]
heroImage: "/images/navigation.jpg"
---

# Flutter Navigation: Panduan Lengkap

Navigasi adalah aspek fundamental dari aplikasi mobile. Di Flutter, ada beberapa cara untuk menangani navigasi antar layar.

## Navigasi Dasar

Cara paling sederhana untuk menavigasi adalah menggunakan `Navigator.push()`:

```dart
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => SecondScreen()),
);
```

## Named Routes

Untuk aplikasi yang lebih besar, named routes memberikan organisasi yang lebih baik:

```dart
routes: {
  '/': (context) => HomeScreen(),
  '/about': (context) => AboutScreen(),
}
```

## Menggunakan go_router

Pendekatan yang direkomendasikan di aplikasi Flutter modern adalah `go_router`:

```dart
final router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => HomeScreen(),
    ),
    GoRoute(
      path: '/blog/:id',
      builder: (context, state) => BlogPostScreen(
        id: state.pathParameters['id']!,
      ),
    ),
  ],
);
```

## Deep Linking

go_router mendukung deep linking secara langsung:

```dart
final router = GoRouter(
  initialLocation: '/',
  routes: [...],
  debugLogDiagnostics: true,
);
```

## Kesimpulan

Pilih pendekatan navigasi yang paling sesuai dengan kompleksitas aplikasi Anda. Untuk aplikasi produksi, go_router adalah pilihan yang direkomendasikan.
