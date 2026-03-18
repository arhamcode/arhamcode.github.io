---
title: "Pengenalan Pola BLoC"
description: "Belajar pola Business Logic Component untuk aplikasi Flutter yang skalabel."
pubDate: 2024-01-19
tags: ["flutter", "bloc", "state-management"]
heroImage: "/images/bloc.jpg"
---

# Pengenalan Pola BLoC

BLoC (Business Logic Component) memisahkan bisnis logic dari UI menggunakan streams. Ini populer untuk aplikasi kompleks yang memerlukan pemisahan concern yang jelas.

## Instalasi

Tambahkan bloc ke dependensi Anda:

```yaml
dependencies:
  flutter_bloc: ^8.1.3
  equatable: ^2.0.5
```

## Events dan States

Definisikan events yang memicu perubahan state:

```dart
abstract class CounterEvent extends Equatable {
  @override
  List<Object?> get props => [];
}

class IncrementEvent extends CounterEvent {}
class DecrementEvent extends CounterEvent {}
```

Definisikan states yang merepresentasikan UI:

```dart
abstract class CounterState extends Equatable {
  @override
  List<Object?> get props => [];
}

class CounterInitial extends CounterState {}
class CounterLoaded extends CounterState {
  final int count;
  CounterLoaded(this.count);
  
  @override
  List<Object?> get props => [count];
}
```

## Membuat BLoC

Implementasikan bisnis logic:

```dart
class CounterBloc extends Bloc<CounterEvent, CounterState> {
  CounterBloc() : super(CounterInitial()) {
    on<IncrementEvent>((event, emit) {
      final current = state is CounterLoaded 
          ? (state as CounterLoaded).count 
          : 0;
      emit(CounterLoaded(current + 1));
    });
    
    on<DecrementEvent>((event, emit) {
      final current = state is CounterLoaded 
          ? (state as CounterLoaded).count 
          : 0;
      emit(CounterLoaded(current - 1));
    });
  }
}
```

## Menggunakan BLoC di UI

Hubungkan UI dengan BLoC:

```dart
BlocBuilder<CounterBloc, CounterState>(
  builder: (context, state) {
    if (state is CounterLoaded) {
      return Text('Count: ${state.count}');
    }
    return CircularProgressIndicator();
  },
)
```

## Kesimpulan

BLoC menyediakan pemisahan concern yang sangat baik dan ideal untuk aplikasi berskala besar.
