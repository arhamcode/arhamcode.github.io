---
title: "Optimasi Performa Flutter"
description: "Teknik untuk membuat aplikasi Flutter Anda berjalan lebih cepat dan lebih halus."
pubDate: 2024-01-21
tags: ["flutter", "performance", "optimization"]
heroImage: "/images/performance.jpg"
---

# Optimasi Performa Flutter

Performa sangat penting untuk pengalaman pengguna. Berikut adalah teknik untuk mengoptimalkan aplikasi Flutter Anda.

## Gunakan Konstruktor const

Selalu gunakan konstruktor const jika memungkinkan:

```dart
// Bagus
const Text('Hello')
const SizedBox(width: 16)
const Icon(Icons.star)

// Hindari
Text('Hello')
SizedBox(width: 16)
```

## ListView Builders

Untuk daftar panjang, gunakan ListView.builder:

```dart
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) {
    return ListTile(
      title: Text(items[index].title),
    );
  },
)
```

## Hindari Rebuilds

Gunakan `const` dan `select` untuk meminimalkan rebuilds:

```dart
// Dengan Bloc
BlocBuilder<CounterBloc, CounterState>(
  buildWhen: (previous, current) => 
    previous.count != current.count,
  builder: (context, state) {
    return Text('${state.count}');
  },
)
```

## Optimasi Gambar

Cache dan optimalkan gambar:

```dart
Image.network(
  url,
  cache: true,
  loadingBuilder: (context, child, loadingProgress) {
    if (loadingProgress == null) return child;
    return CircularProgressIndicator();
  },
)
```

## Gunakan RepaintBoundary

Isolasikan repaints yang mahal:

```dart
RepaintBoundary(
  child: CustomPaint(
    painter: ExpensivePainter(),
  ),
)
```

## Profil Aplikasi Anda

Gunakan Flutter DevTools untuk mengidentifikasi bottleneck:

```dart
// Tambahkan pelacakan timeline
Timeline.startSync('expensive operation');
// ... kode operasi
Timeline.finishSync();
```

## Kesimpulan

Profil dulu, lalu optimalkan. Jangan tebak - ukur!
