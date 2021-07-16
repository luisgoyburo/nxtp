/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface CounterInterface extends ethers.utils.Interface {
  functions: {
    "count()": FunctionFragment;
    "increment()": FunctionFragment;
    "incrementAndSend(address,address,uint256)": FunctionFragment;
    "setShouldRevert(bool)": FunctionFragment;
    "shouldRevert()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "count", values?: undefined): string;
  encodeFunctionData(functionFragment: "increment", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "incrementAndSend",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setShouldRevert",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "shouldRevert",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "count", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "increment", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "incrementAndSend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setShouldRevert",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shouldRevert",
    data: BytesLike
  ): Result;

  events: {};
}

export class Counter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CounterInterface;

  functions: {
    count(overrides?: CallOverrides): Promise<[BigNumber]>;

    increment(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    incrementAndSend(
      assetId: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setShouldRevert(
      value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    shouldRevert(overrides?: CallOverrides): Promise<[boolean]>;
  };

  count(overrides?: CallOverrides): Promise<BigNumber>;

  increment(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  incrementAndSend(
    assetId: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setShouldRevert(
    value: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  shouldRevert(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    count(overrides?: CallOverrides): Promise<BigNumber>;

    increment(overrides?: CallOverrides): Promise<void>;

    incrementAndSend(
      assetId: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setShouldRevert(value: boolean, overrides?: CallOverrides): Promise<void>;

    shouldRevert(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    count(overrides?: CallOverrides): Promise<BigNumber>;

    increment(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    incrementAndSend(
      assetId: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setShouldRevert(
      value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    shouldRevert(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    count(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increment(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    incrementAndSend(
      assetId: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setShouldRevert(
      value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    shouldRevert(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
