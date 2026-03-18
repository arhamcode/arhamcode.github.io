---
title: "Working with REST APIs in Flutter"
description: "Learn how to fetch, send, and handle data from REST APIs in Flutter."
pubDate: 2024-01-17
tags: ["flutter", "api", "http", "networking"]
heroImage: "/images/api.jpg"
---

# Working with REST APIs in Flutter

Connecting your Flutter app to a backend API is essential for most modern applications. Let's explore how to work with REST APIs efficiently.

## HTTP Package

The `http` package is Flutter's official package for HTTP requests:

```dart
import 'package:http/http.dart' as http;

Future<List<Post>> fetchPosts() async {
  final response = await http.get(
    Uri.parse('https://jsonplaceholder.typicode.com/posts'),
  );
  
  if (response.statusCode == 200) {
    final List<dynamic> json = jsonDecode(response.body);
    return json.map((e) => Post.fromJson(e)).toList();
  } else {
    throw Exception('Failed to load posts');
  }
}
```

## Dio - Advanced HTTP Client

For more complex scenarios, Dio provides advanced features:

```dart
import 'package:dio/dio.dart';

final dio = Dio(BaseOptions(
  baseUrl: 'https://api.example.com',
  connectTimeout: Duration(seconds: 5),
));

// Adding interceptors
dio.interceptors.add(LogInterceptor(
  requestBody: true,
  responseBody: true,
));
```

## Error Handling

Always handle errors gracefully:

```dart
try {
  final response = await dio.get('/users');
  return User.fromJson(response.data);
} on DioException catch (e) {
  if (e.type == DioExceptionType.connectionTimeout) {
    throw Exception('Connection timed out');
  }
  throw Exception('Failed to load user');
}
```

## Model Classes

Create clean model classes with JSON serialization:

```dart
class Post {
  final int id;
  final String title;
  final String body;
  
  Post({required this.id, required this.title, required this.body});
  
  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      id: json['id'],
      title: json['title'],
      body: json['body'],
    );
  }
}
```

## Conclusion

Choose http for simple needs and Dio for complex API interactions. Always implement proper error handling.
