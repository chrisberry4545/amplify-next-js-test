import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerThing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Thing, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyThing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Thing, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Thing = LazyLoading extends LazyLoadingDisabled ? EagerThing : LazyThing

export declare const Thing: (new (init: ModelInit<Thing>) => Thing) & {
  copyOf(source: Thing, mutator: (draft: MutableModel<Thing>) => MutableModel<Thing> | void): Thing;
}