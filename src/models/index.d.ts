import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Description?: string | null;
  readonly Date?: string | null;
  readonly WouldRoomAgain?: boolean | null;
  readonly Rating?: number | null;
  readonly Bathroom?: string | null;
  readonly numResidents?: number | null;
  readonly numLikes?: string | null;
  readonly accountEmail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Description?: string | null;
  readonly Date?: string | null;
  readonly WouldRoomAgain?: boolean | null;
  readonly Rating?: number | null;
  readonly Bathroom?: string | null;
  readonly numResidents?: number | null;
  readonly numLikes?: string | null;
  readonly accountEmail?: string | null;
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
  readonly Name?: string | null;
  readonly numReviews?: number | null;
  readonly ratings?: number | null;
  readonly imageURL?: string | null;
  readonly totalRatings?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDorm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dorm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly numReviews?: number | null;
  readonly ratings?: number | null;
  readonly imageURL?: string | null;
  readonly totalRatings?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Dorm = LazyLoading extends LazyLoadingDisabled ? EagerDorm : LazyDorm

export declare const Dorm: (new (init: ModelInit<Dorm>) => Dorm) & {
  copyOf(source: Dorm, mutator: (draft: MutableModel<Dorm>) => MutableModel<Dorm> | void): Dorm;
}