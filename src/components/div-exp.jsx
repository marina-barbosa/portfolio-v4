"use client"

export const DivExp = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen" id="exp">
      <div className="container mx-auto">
        <div className="overflow-auto w-full">
          <div className="flex justify-between p-12 gap-5 relative">
            {/* Timeline line */}
            <div className="absolute h-0.5 bg-blue-200 w-full left-0 top-1/2 -translate-y-1/2"></div>

            {/* Card 1 */}
            <div className="w-60 flex-shrink-0 grid grid-rows-[1fr_50px_1fr] gap-5 relative z-10">
              <div className="flex flex-col justify-end text-center">
                <h3 className="font-bold text-blue-800 mb-1">Desenvolvimento de Software - Backend</h3>
                <h4 className="text-blue-600 mb-2">Cubos Academy</h4>
                <p className="text-sm text-blue-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sunt fugit. Magni consectetur eos qui
                  veniam esse. Exercitationem amet rerum placeat sit ut saepe tenetur eaque reprehenderit, laborum ab
                  dolor!
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center text-2xl text-blue-800 shadow-md">
                  <i className="fa-solid fa-school-flag"></i>
                </div>
              </div>
              <div className="flex justify-center items-start text-blue-800 font-bold">2023</div>
            </div>

            {/* Card 2 */}
            <div className="w-60 flex-shrink-0 grid grid-rows-[1fr_50px_1fr] gap-5 relative z-10">
              <div className="flex justify-center items-end text-blue-800 font-bold">2023</div>
              <div className="flex justify-center items-center">
                <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center text-2xl text-blue-800 shadow-md">
                  <i className="fa-solid fa-school-flag"></i>
                </div>
              </div>
              <div className="flex flex-col justify-start text-center">
                <h3 className="font-bold text-blue-800 mb-1">Treinamento Sharp Coders - Fullstack</h3>
                <h4 className="text-blue-600 mb-2">Ima Tech</h4>
                <p className="text-sm text-blue-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sunt fugit. Magni consectetur eos qui
                  veniam esse. Exercitationem amet rerum placeat sit ut saepe tenetur eaque reprehenderit, laborum ab
                  dolor!
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-60 flex-shrink-0 grid grid-rows-[1fr_50px_1fr] gap-5 relative z-10">
              <div className="flex flex-col justify-end text-center">
                <h3 className="font-bold text-blue-800 mb-1">Engenharia de Software</h3>
                <h4 className="text-blue-600 mb-2">Faculdade UNOPAR</h4>
                <p className="text-sm text-blue-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sunt fugit. Magni consectetur eos qui
                  veniam esse. Exercitationem amet rerum placeat sit ut saepe tenetur eaque reprehenderit, laborum ab
                  dolor!
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center text-2xl text-blue-800 shadow-md">
                  <i className="fa-solid fa-school-flag"></i>
                </div>
              </div>
              <div className="flex justify-center items-start text-blue-800 font-bold">2024</div>
            </div>

            {/* Card 4 */}
            <div className="w-60 flex-shrink-0 grid grid-rows-[1fr_50px_1fr] gap-5 relative z-10">
              <div className="flex justify-center items-end text-blue-800 font-bold">2024</div>
              <div className="flex justify-center items-center">
                <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center text-2xl text-blue-800 shadow-md">
                  <i className="fa-solid fa-question"></i>
                </div>
              </div>
              <div className="flex flex-col justify-start text-center">
                <h3 className="font-bold text-blue-800 mb-1"></h3>
                <h4 className="text-blue-600 mb-2"></h4>
                <p className="text-sm text-blue-500"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

