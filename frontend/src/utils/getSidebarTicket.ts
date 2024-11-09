"use client";

import { NavigationItem, TicketFinal } from "@/types/types";
import { iconMapping } from "./iconMapping";
import { ticketStore } from "@/stores/ticketStore";

export const getSidebarTicket = (ticket: TicketFinal, childrenBool: boolean): NavigationItem => {
  const { tickets } = ticketStore();
  console.log(tickets.length);
  const parent = ticket.parentId ? tickets.find((t) => t.id === ticket.parentId) : null;
  const children = ticket.childrenIds ? tickets.filter((t) => t.parentId === ticket.id) : null;

  console.log("children");
  console.log(children);

  let navigationItem: NavigationItem = {
    title: ticket.title,
    route: `/projects/${ticket.id}`,
    iconDefinition: iconMapping[ticket.ticketType],
  };

  if (childrenBool && children) {
    navigationItem = {
      ...navigationItem,
      children: children.map((child) => getSidebarTicket(child, true)),
    };
  }

  if (parent) {
    return { ...navigationItem, parent: getSidebarTicket(parent, false) };
  }

  // console.log(navigationItem);
  return navigationItem;
};
