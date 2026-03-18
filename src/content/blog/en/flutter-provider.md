---
title: "Understanding Provider in Flutter"
description: "Master Dependency Injection and State Management with Provider package."
pubDate: 2024-01-16
tags: ["flutter", "provider", "state-management"]
heroImage: "/images/provider.jpg"
---

# Understanding Provider in Flutter

Provider is Flutter's recommended approach for state management and dependency injection. It's simple, scalable, and built into the Flutter ecosystem.

## Setting Up Provider

First, add provider to your pubspec.yaml:

```yaml
dependencies:
  provider: ^6.1.1
```

## Basic Provider Usage

Creating a simple provider:

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

## Providing Values

Wrap your widget with Provider:

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

## Consuming Values

Access values in your widgets:

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

For multiple providers:

```dart
MultiProvider(
  providers: [
    ChangeNotifierProvider(create: (_) => Counter()),
    ChangeNotifierProvider(create: (_) => ThemeNotifier()),
  ],
  child: MyApp(),
)
```

## Conclusion

Provider is an excellent choice for medium-sized applications. It's easy to learn and integrates perfectly with Flutter's architecture.
