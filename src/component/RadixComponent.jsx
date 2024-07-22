import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Adventure from "./Adventure";

const RadixComponent = () => (
  <Tabs.Root
    className="flex flex-col max-w-full shadow-[0_2px_10px] shadow-blackA2"
    defaultValue="tab1"
  >
    <Tabs.List
      className="shrink-0 flex border-b border-mauve6"
      aria-label="Manage your account"
    >
      <Tabs.Trigger
        className="  px-5 h-12 flex-1 flex items-center justify-center text-base leading-none text-gray-400 select-none first:rounded-tl-md last:rounded-tr-md hover:text-sky-500 data-[state=active]:text-sky-500   outline-none cursor-pointer"
        value="tab1"
      >
        All
      </Tabs.Trigger>
      <Tabs.Trigger
        className="  px-5 h-12 flex-1 flex items-center justify-center text-base leading-none text-gray-400 select-none first:rounded-tl-md last:rounded-tr-md hover:text-sky-500 data-[state=active]:text-sky-500  outline-none cursor-pointer"
        value="tab2"
      >
        Adventure
      </Tabs.Trigger>
      <Tabs.Trigger
        className=" px-5 h-12 flex-1 flex items-center justify-center text-base leading-none text-gray-400 select-none first:rounded-tl-md last:rounded-tr-md hover:text-sky-500 data-[state=active]:text-sky-500  outline-none cursor-pointer"
        value="tab3"
      >
        Fantasy
      </Tabs.Trigger>
      <Tabs.Trigger
        className="text-gray-400 px-5 h-12 flex-1 flex items-center justify-center text-base leading-none  select-none first:rounded-tl-md last:rounded-tr-md hover:text-sky-500 data-[state=active]:text-sky-500  outline-none cursor-pointer"
        value="tab4"
      >
        Deductive
      </Tabs.Trigger>
      <Tabs.Trigger
        className="text-gray-400 px-5 h-12 flex-1 flex items-center justify-center text-base leading-none  select-none first:rounded-tl-md last:rounded-tr-md hover:text-sky-500 data-[state=active]:text-sky-500  outline-none cursor-pointer"
        value="tab5"
      >
        Pyscology
      </Tabs.Trigger>
      <Tabs.Trigger
        className="text-gray-400 px-5 h-12 flex-1 flex items-center justify-center text-base leading-none  select-none first:rounded-tl-md last:rounded-tr-md hover:text-sky-500 data-[state=active]:text-sky-500  outline-none cursor-pointer"
        value="tab6"
      >
        Business
      </Tabs.Trigger>
      <Tabs.Trigger
        className=" px-5 h-12 flex-1 flex items-center justify-center text-base leading-none text-gray-400 select-none first:rounded-tl-md last:rounded-tr-md hover:text-sky-500 data-[state=active]:text-sky-500  outline-none cursor-pointer"
        value="tab6"
      >
        Horor
      </Tabs.Trigger>
      <Tabs.Trigger
        className=" px-5 h-12 flex-1 flex items-center justify-center text-base leading-none text-gray-400 select-none first:rounded-tl-md last:rounded-tr-md hover:text-sky-500 data-[state=active]:text-sky-500  outline-none cursor-pointer"
        value="tab7"
      >
        Education
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content
      className="grow p-5  rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab2"
    >
      <Adventure />
    </Tabs.Content>
    {/* <Tabs.Content
      className="grow p-5 bg-[#252836] rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab2"
    >
      <ColdDishes />
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-[#252836] rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab3"
    >
      <Soup />
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-[#252836] rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab4"
    >
      <Grill />
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-[#252836] rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab5"
    >
      <Appetizer />
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-[#252836] rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab6"
    >
      <Dessert />
    </Tabs.Content> */}
  </Tabs.Root>
);

export default RadixComponent;
