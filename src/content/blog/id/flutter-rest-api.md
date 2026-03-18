---
title: "Bekerja dengan REST API di Flutter"
description: "Belajar cara mengambil, mengirim, dan menangani data dari REST API di Flutter."
pubDate: 2024-01-17
tags: ["flutter", "api", "http", "networking"]
heroImage: "/images/api.jpg"
---

# Bekerja dengan REST API di Flutter

Menghubungkan aplikasi Flutter Anda ke backend API sangat penting untuk sebagian besar aplikasi modern. Mari kita jelajahi cara bekerja dengan REST API secara efisien.

## Paket HTTP

Paket `http` adalah paket resmi Flutter untuk permintaan HTTP:

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

## Dio - Klien HTTP Lanjutan

Untuk skenario yang lebih kompleks, Dio menyediakan fitur lanjutan:

```dart
import 'package:dio/dio.dart';

final dio = Dio(BaseOptions(
  baseUrl: 'https://api.example.com',
  connectTimeout: Duration(seconds: 5),
));

// Menambahkan interceptor
dio.interceptors.add(LogInterceptor(
  requestBody: true,
  responseBody: true,
));
```

## Penanganan Error

Selalu tangani error dengan baik:

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

## Kelas Model

Buat kelas model yang bersih dengan serialisasi JSON:

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

## Kesimpulan

Pilih http untuk kebutuhan sederhana dan Dio untuk interaksi API yang kompleks. Selalu terapkan penanganan error yang tepat.
