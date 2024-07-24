import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Adventure from "./Adventure";
import All from "./All";
import Fantasy from "./Fantasy";
import Horor from "./Horor";
import Deductive from "./Deductive";
import Pyscology from "./Pyscology";
import Business from "./Business";
import Education from "./Education";

const RadixComponent = () => (
  <Tabs.Root className="flex flex-col w-full  pt-10" defaultValue="tab1">
    <Tabs.List
      className="shrink-0 flex border-b border-mauve6"
      aria-label="Manage your account"
    >
      <Tabs.Trigger
        className="  px-4 h-12 flex-1 flex items-center justify-center text-base leading-none text-gray-400 select-none first:rounded-tl-md last:rounded-tr-md hover:text-sky-500 data-[state=active]:text-sky-500   outline-none cursor-pointer"
        value="tab1"
      >
        All
      </Tabs.Trigger>
      <Tabs.Trigger
        className="  px-4 h-12 flex-1 flex items-center justify-center text-base leading-none text-gray-400 select-none first:rounded-tl-md last:rounded-tr-md hover:text-sky-500 data-[state=active]:text-sky-500  outline-none cursor-pointer"
        value="tab2"
      >
        Adventure
      </Tabs.Trigger>
      <Tabs.Trigger
        className=" px-4 h-12 flex-1 flex items-center justify-center text-base leading-none text-gray-400 select-none first:rounded-tl-md last:rounded-tr-md hover:text-sky-500 data-[state=active]:text-sky-500  outline-none cursor-pointer"
        value="tab3"
      >
        Fantasy
      </Tabs.Trigger>
      <Tabs.Trigger
        className="text-gray-400 px-4 h-12 flex-1 flex items-center justify-center text-base leading-none  select-none first:rounded-tl-md last:rounded-tr-md hover:text-sky-500 data-[state=active]:text-sky-500  outline-none cursor-pointer"
        value="tab4"
      >
        Deductive
      </Tabs.Trigger>
      <Tabs.Trigger
        className="text-gray-400 px-4 h-12 flex-1 flex items-center justify-center text-base leading-none  select-none first:rounded-tl-md last:rounded-tr-md hover:text-sky-500 data-[state=active]:text-sky-500  outline-none cursor-pointer"
        value="tab5"
      >
        Pyscology
      </Tabs.Trigger>
      <Tabs.Trigger
        className="text-gray-400 px-4 h-12 flex-1 flex items-center justify-center text-base leading-none  select-none first:rounded-tl-md last:rounded-tr-md hover:text-sky-500 data-[state=active]:text-sky-500  outline-none cursor-pointer"
        value="tab6"
      >
        Business
      </Tabs.Trigger>
      <Tabs.Trigger
        className=" px-4 h-12 flex-1 flex items-center justify-center text-base leading-none text-gray-400 select-none first:rounded-tl-md last:rounded-tr-md hover:text-sky-500 data-[state=active]:text-sky-500  outline-none cursor-pointer"
        value="tab7"
      >
        Horor
      </Tabs.Trigger>
      <Tabs.Trigger
        className=" px-4 h-12 flex-1 flex items-center justify-center text-base leading-none text-gray-400 select-none first:rounded-tl-md last:rounded-tr-md hover:text-sky-500 data-[state=active]:text-sky-500  outline-none cursor-pointer"
        value="tab8"
      >
        Education
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content
      className="grow p-4  rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab1"
    >
      {/* <All /> */}
    </Tabs.Content>
    <Tabs.Content
      className="grow p-4  rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab2"
    >
      {/* <Adventure /> */}
    </Tabs.Content>
    <Tabs.Content
      className="grow p-4  rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab3"
    >
      {/* <Fantasy /> */}
    </Tabs.Content>
    <Tabs.Content
      className="grow p-4  rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab4"
    >
      {/* <Deductive /> */}
    </Tabs.Content>
    <Tabs.Content
      className="grow p-4  rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab5"
    >
      {/* <Pyscology /> */}
    </Tabs.Content>
    <Tabs.Content
      className="grow p-4  rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab6"
    >
      {/* <Business /> */}
    </Tabs.Content>
    <Tabs.Content
      className="grow p-4  rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab7"
    >
      {/* <Horor /> */}
    </Tabs.Content>
    <Tabs.Content
      className="grow p-4  rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab8"
    >
      {/* <Education /> */}
    </Tabs.Content>
  </Tabs.Root>
);

export default RadixComponent;
