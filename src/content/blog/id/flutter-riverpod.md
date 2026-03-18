---
title: "Memulai dengan Riverpod"
description: "Solusi state management yang kuat untuk Flutter dengan compile-time safety."
pubDate: 2024-01-18
tags: ["flutter", "riverpod", "state-management"]
heroImage: "/images/riverpod.jpg"
---

# Memulai dengan Riverpod

Riverpod adalah library state management generasi berikutnya untuk Flutter. Ini menawarkan compile-time safety, utility pengujian, dan pendekatan unik untuk dependency injection.

## Instalasi

Tambahkan Riverpod ke dependensi Anda:

```yaml
dependencies:
  flutter_riverpod: ^2.4.9
  riverpod_annotation: ^2.3.3

dev_dependencies:
  riverpod_generator: ^2.3.9
  build_runner: ^2.4.8
```

## Provider Dasar

Buat provider sederhana:

```dart
final counterProvider = StateProvider<int>((ref) => 0);

// Menggunakan ref untuk watching provider lain
final doubledCounterProvider = Provider<int>((ref) {
  final counter = ref.watch(counterProvider);
  return counter * 2;
});
```

## Provider Async

Tangani data async dengan mudah:

```dart
final postsProvider = FutureProvider<List<Post>>((ref) async {
  final response = await http.get(Uri.parse('/posts'));
  return parsePosts(response.body);
});
```

## StateNotifier

Untuk state yang kompleks:

```dart
class CounterNotifier extends StateNotifier<int> {
  CounterNotifier() : super(0);
  
  void increment() => state++;
  void decrement() => state--;
}

final counterNotifierProvider = 
    StateNotifierProvider<CounterNotifier, int>((ref) {
  return CounterNotifier();
});
```

## Code Generation

Gunakan annotations untuk kode yang lebih bersih:

```dart
@riverpod
Future<User> user(UserRef ref, int id) async {
  return fetchUser(id);
}
```

## Kesimpulan

Riverpod memberikan pengalaman pengembang yang sangat baik dengan compile-time safety dan dukungan pengujian yang luar biasa.
