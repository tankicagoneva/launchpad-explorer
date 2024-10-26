"use client";

import logo from '@/assets/logo.svg';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Earth, MapPin, MapPinned, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import LaunchCounter from "@/components/LaunchCounter";
import LaunchDetails from "@/components/LaunchDetails";
import { Launchpad } from '@/types/launchpad';
import { useLaunchDetails } from '@/hooks/useLaunchDetails';


interface LaunchInformationProps {
  data: Launchpad | null;
}



const statusVariants: Record<string, "active" | "retired" | "underconstruction"> = {
  active: "active",
  retired: "retired",
  underconstruction: "underconstruction",
};

export function LaunchInformation({ data }: LaunchInformationProps) {
  const launchCount = data?.launches?.length ?? 0;
  const launchIds = data?.launches ?? [];
  const { launchDetails } = useLaunchDetails(launchIds);
  const status = data?.status.replace(/\s/g, "").toLowerCase();
  const statusVariant = statusVariants[status || ""] || "active";


  return (
    <div className='space-y-8 p-8 h-screen'>
          <img src={logo} alt='Launchpad explorer logo' width='300px;' />

    <div className="overflow-hidden rounded-[0.5rem] border ">
    <div className="flex-col md:flex">
     <div className="space-y-8 p-8">
      <div className="flex flex-col lg:flex-row lg:ml-0 lg:justify-between lg:items-center">
        <h2 className="text-3xl font-bold tracking-tight">{data?.full_name}</h2>
          <Badge variant={statusVariant} className="mt-2 self-start lg:self-center">
            {data?.status || 'Active'}
          </Badge>     
      </div>

     
     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Locality</CardTitle>
          <MapPinned className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
      <CardContent>
        <p>{data?.locality}</p>
      </CardContent>
        </Card>

        <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Timezone</CardTitle>
          <Earth className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
      <CardContent>
        <p>{data?.timezone}</p>
      </CardContent>
        </Card>

        <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Region</CardTitle>
          <MapPin className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
      <CardContent>
        <p>{data?.region}</p>
      </CardContent>
        </Card>

        <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Rockets</CardTitle>
          <Rocket className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
      <CardContent>
        <p>{data?.rockets.length}</p>
      </CardContent>
        </Card>
     </div>

     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <div className="rounded-xl border bg-card text-card-foreground shadow col-span-4">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-3xl font-bold tracking-tight">Details</h3>
          <p>{data?.details}</p>
        </div>
      </div>
      <div className="rounded-xl border bg-card text-card-foreground shadow col-span-3 h-[500px] overflow-auto max-md:col-span-4">
       <LaunchCounter launchCount={launchCount} />
       <LaunchDetails launchDetails={launchDetails} />
      </div>
      </div>
  </div>
    </div>
      </div>
      </div>
  );
}
export default LaunchInformation;
