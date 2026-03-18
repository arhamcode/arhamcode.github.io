---
title: "Introduction to BLoC Pattern"
description: "Learn the Business Logic Component pattern for scalable Flutter apps."
pubDate: 2024-01-19
tags: ["flutter", "bloc", "state-management"]
heroImage: "/images/bloc.jpg"
---

# Introduction to BLoC Pattern

BLoC (Business Logic Component) separates business logic from UI using streams. It's popular for complex applications requiring clear separation of concerns.

## Installation

Add bloc to your dependencies:

```yaml
dependencies:
  flutter_bloc: ^8.1.3
  equatable: ^2.0.5
```

## Events and States

Define events that trigger state changes:

```dart
abstract class CounterEvent extends Equatable {
  @override
  List<Object?> get props => [];
}

class IncrementEvent extends CounterEvent {}
class DecrementEvent extends CounterEvent {}
```

Define states that represent UI:

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

## Creating the BLoC

Implement the business logic:

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

## Using BLoC in UI

Connect UI with BLoC:

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

## Conclusion

BLoC provides excellent separation of concerns and is ideal for large-scale applications.
