import React from "react";

function ProjAndTabs() {
    return (
        <div className=" overflow-hidden container px-10 mx-auto">
            <h1 className="mb-4 text-2xl font-bold">Project Name</h1>
            <div className="flex flex-wrap text-sm text-center pt-4 mb-6">
                <span className="inline-block w-auto mb-4 lg:mb-0 px-4 pb-2 border-b-2 border-indigo-500 text-indigo-500">
                    Tab A
                </span>
                <span className="inline-block w-auto mb-4 lg:mb-0 px-4 pb-2">
                    Tab B
                </span>
                <span className="inline-block w-auto mb-4 lg:mb-0 px-4 pb-2">
                    Tab C
                </span>
                <span className="inline-block w-auto mb-4 lg:mb-0 px-4 pb-2">
                    Tab D
                </span>
            </div>
        </div>
    );
}

export default ProjAndTabs;
