import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { DialogTitle } from "../ui/dialog";
import Naira from "../naira";
import Link from "next/link";

const MenuDrawer = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant={"ghost"}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" />
            </svg>
            <h4>
              <Naira />
              3,329.41
            </h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="mb-6 p-4">
          <DialogTitle>Ableez</DialogTitle>
          <div className="mt-4 w-full">
            <Link href={"/leagues"}>
              <DrawerClose className="w-full rounded-2xl bg-white/5 p-3 text-left hover:bg-white/10">
                All leagues
              </DrawerClose>
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
