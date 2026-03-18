---
title: "Getting Started with Riverpod"
description: "A powerful state management solution for Flutter with compile-time safety."
pubDate: 2024-01-18
tags: ["flutter", "riverpod", "state-management"]
heroImage: "/images/riverpod.jpg"
---

# Getting Started with Riverpod

Riverpod is Flutter's next-generation state management library. It offers compile-time safety, testing utilities, and a unique approach to dependency injection.

## Installation

Add Riverpod to your dependencies:

```yaml
dependencies:
  flutter_riverpod: ^2.4.9
  riverpod_annotation: ^2.3.3

dev_dependencies:
  riverpod_generator: ^2.3.9
  build_runner: ^2.4.8
```

## Basic Providers

Create simple providers:

```dart
final counterProvider = StateProvider<int>((ref) => 0);

// Using ref to watch other providers
final doubledCounterProvider = Provider<int>((ref) {
  final counter = ref.watch(counterProvider);
  return counter * 2;
});
```

## Async Providers

Handle async data easily:

```dart
final postsProvider = FutureProvider<List<Post>>((ref) async {
  final response = await http.get(Uri.parse('/posts'));
  return parsePosts(response.body);
});
```

## StateNotifier

For complex state:

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

Use annotations for cleaner code:

```dart
@riverpod
Future<User> user(UserRef ref, int id) async {
  return fetchUser(id);
}
```

## Conclusion

Riverpod provides excellent developer experience with compile-time safety and great testing support.
