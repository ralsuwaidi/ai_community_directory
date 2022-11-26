import directoryForm from "../components/Form";
import { Breadcrumb, Button, Modal, Timeline } from "flowbite-react";
import { HiListBullet, HiOutlineCheck } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import { data } from "../data";
import { Helmet } from "react-helmet-async";
import { CardLineIcon } from "../components/CardIcon";
import { SlCalender } from "react-icons/sl";
import { useState } from "react";
import CardIconList from "../components/CardIconList";
import Metadata from "../components/Metadata";
import Detail from "../components/Detail";
import Highlights from "../components/Highlights";
import DefaultTimeline from "../components/DefaultTimeline";

export default function EventDetailView() {
  let { eventId } = useParams();
  const event = data.directorys.find((obj) => obj.username === eventId);

  return (
    <>
      {/* Page Metadata */}
      <Helmet>
        <title>{event.name}</title>
        <meta name="description" content={event.headline} />
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-white max-w-2xl lg:max-w-7xl mx-auto px-3  ">
        <div className="pt-6">
          <Breadcrumb aria-label="Default breadcrumb">
            <Breadcrumb.Item href="/directory" icon={HiListBullet}>
              Directory
            </Breadcrumb.Item>
            <Breadcrumb.Item>{event.username}</Breadcrumb.Item>
          </Breadcrumb>

          <div className="mt-4 relative">
            <img
              src={event.banner}
              className="lg:col-span-2 h-64 lg:h-52 w-full object-cover rounded-xl"
            />
            <div className="absolute top-2/3 left-12 border-solid border-white rounded-full border-4">
              <img
                src={event.image}
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
          </div>

          <div className="mt-16 pb-16 lg:px-4 lg:mt-20 lg:pb-24">
            <div className="lg:col-span-2 lg:border-gray-200 lg:pr-8 border-b pb-5">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {event.name}
              </h1>

              {/* Description and details */}
              <p className="text-sm text-gray-900">{event.headline}</p>
              <p className="text-sm text-gray-500">{event.position}</p>

              <div className="mt-5">
                <CardIconList event={event} />
              </div>
            </div>

            {/* Event info */}
            <div className=" lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 ">
              <div className="py-10 lg:col-span-2 px-2 sm:px-0 lg:col-start-1 border-b md:border-b-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-16 lg:pr-8">
                <Detail title="About" detail={event.about} />

                <div className="mt-10 pb-5">
                  <Highlights highlights={event.highlights} />
                </div>
<div className="mt-10">

                <Metadata metadata={event.metadata}/>
</div>
              </div>

              {/* Timeline */}
              <div className="mt-4 lg:mt-0">
                <DefaultTimeline timeline={event.timeline} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
