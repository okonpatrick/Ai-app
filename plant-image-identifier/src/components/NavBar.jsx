
export const NavBar = () => {
  return (
    <div className="">
<link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"/>

<div className="flex items-center justify-center max-h-screen">
	<div className="flex flex-col">
		<div className="w-full max-w-md px-2 py-0 mx-auto bg-white rounded-2xl shadow-xl">
			<div className="px-5 pt-3 bg-white shadow-lg rounded-2xl">
				<div className="flex flex-row space-x-3">
					<div className="flex group">
						<a href="/" className="p-3 text-gray-400 hover:text-yellow-500">
							<span className="flex flex-col items-center">
								<i className="mdi mdi-home-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
									transition-color duration-200"></i>

								<span className="text-xs mb-2 transition-all duration-200">
									Forum
								</span>

								<span className="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"></span>
							</span>
						</a>
					</div>

					<div className="flex group">
						<a href="#" className="p-3 text-gray-400 hover:text-yellow-500">
							<span className="flex flex-col items-center">
								<i className="mdi mdi-compass-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
									transition-color duration-200"></i>

								<span className="text-xs mb-2 transition-all duration-200">
									Farm
								</span>

								<span className="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"></span>
							</span>
						</a>
					</div>

					<div className="flex group">
						<a href="/identifier" className="p-3 text-yellow-500 hover:text-yellow-500">
							<span className="flex flex-col items-center">
								<i className="mdi mdi-layers-outline mdi-24px mx-1 text-gray-700 group-hover:text-gray-700
									transition-color duration-200"></i>

								<span className="text-xs mb-2 transition-all duration-200">
									Identify
								</span>

								<span className="h-1 w-5 rounded-full bg-yellow-500 group-hover:bg-yellow-500
									hover:h-3 hover:w-3 transition-all duration-150 delay-100"></span>
							</span>
						</a>
					</div>

					<div className="flex group">
						<a href="/diagnose" className="p-3 text-gray-400 hover:text-yellow-500">
							<span className="flex flex-col items-center">
								<i className="mdi mdi-basket-plus-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
									transition-color duration-200"></i>

								<span className="text-xs mb-2 transition-all duration-200">
									Diagnose
								</span>

								<span className="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"></span>
							</span>
						</a>
					</div>

					<div className="flex group">
						<a href="#" className="p-3 text-gray-400 hover:text-yellow-500">
							<span className="flex flex-col items-center">
								<i className="mdi mdi-account-circle-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
									transition-color duration-200"></i>

								<span className="text-xs mb-2 transition-all duration-200">
									Profile
								</span>

								<span className="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"></span>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    </div>
  )
}
