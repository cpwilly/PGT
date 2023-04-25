import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dormName?: string | null;
  readonly date?: string | null;
  readonly wouldRoomAgain?: boolean | null;
  readonly numResidents?: number | null;
  readonly numBathrooms?: string | null;
  readonly description?: string | null;
  readonly rating?: number | null;
  readonly numLikes?: number | null;
  readonly userEmail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dormName?: string | null;
  readonly date?: string | null;
  readonly wouldRoomAgain?: boolean | null;
  readonly numResidents?: number | null;
  readonly numBathrooms?: string | null;
  readonly description?: string | null;
  readonly rating?: number | null;
  readonly numLikes?: number | null;
  readonly userEmail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Review = LazyLoading extends LazyLoadingDisabled ? EagerReview : LazyReview

export declare const Review: (new (init: ModelInit<Review>) => Review) & {
  copyOf(source: Review, mutator: (draft: MutableModel<Review>) => MutableModel<Review> | void): Review;
}

type EagerDorm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dorm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly ones?: number | null;
  readonly twos?: number | null;
  readonly threes?: number | null;
  readonly fours?: number | null;
  readonly fives?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDorm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dorm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly ones?: number | null;
  readonly twos?: number | null;
  readonly threes?: number | null;
  readonly fours?: number | null;
  readonly fives?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Dorm = LazyLoading extends LazyLoadingDisabled ? EagerDorm : LazyDorm

export declare const Dorm: (new (init: ModelInit<Dorm>) => Dorm) & {
  copyOf(source: Dorm, mutator: (draft: MutableModel<Dorm>) => MutableModel<Dorm> | void): Dorm;
}