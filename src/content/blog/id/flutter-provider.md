---
title: "Memahami Provider di Flutter"
description: "Kuasai Dependency Injection dan State Management dengan paket Provider."
pubDate: 2024-01-16
tags: ["flutter", "provider", "state-management"]
heroImage: "/images/provider.jpg"
---

# Memahami Provider di Flutter

Provider adalah pendekatan yang direkomendasikan Flutter untuk state management dan dependency injection. Ini sederhana, skalabel, dan terintegrasi dengan ekosistem Flutter.

## Menyiapkan Provider

Pertama, tambahkan provider ke pubspec.yaml Anda:

```yaml
dependencies:
  provider: ^6.1.1
```

## Penggunaan Dasar Provider

Membuat provider sederhana:

```dart
class Counter extends ChangeNotifier {
  int _count = 0;
  
  int get count => _count;
  
  void increment() {
    _count++;
    notifyListeners();
  }
}
```

## Menyediakan Nilai

Bungkus widget Anda dengan Provider:

```dart
void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => Counter(),
      child: MyApp(),
    ),
  );
}
```

## Mengkonsumsi Nilai

Akses nilai di widget Anda:

```dart
class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final counter = context.watch<Counter>();
    return Text('Count: ${counter.count}');
  }
}
```

## MultiProvider

Untuk beberapa provider:

```dart
MultiProvider(
  providers: [
    ChangeNotifierProvider(create: (_) => Counter()),
    ChangeNotifierProvider(create: (_) => ThemeNotifier()),
  ],
  child: MyApp(),
)
```

## Kesimpulan

Provider adalah pilihan yang sangat baik untuk aplikasi berskala menengah. Mudah dipelajari dan terintegrasi sempurna dengan arsitektur Flutter.
