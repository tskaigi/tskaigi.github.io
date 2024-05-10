"use client";

import React from "react";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";

export const MapDialog = () => {
  return (
    <>
      <button
        className="btn"
        onClick={() => (document.getElementById("map_modal") as HTMLDialogElement)?.showModal()}
      >
        <HiMagnifyingGlassPlus size={20} strokeWidth={1} />
        マップを拡大する
      </button>
      <dialog id="map_modal" className="modal">
        <div className="modal-box w-11/12 max-w-7xl bg-white flex flex-col items-center p-1 pb-4">
          <div className="hidden md:block shadow">
            <img src="/tskaigi_map_h.png" alt="PC用会場図" />
          </div>
          <div className="md:hidden flex flex-col gap-8">
            <img src="/tskaigi_map_v.png" alt="PC用会場図" />
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">とじる</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
