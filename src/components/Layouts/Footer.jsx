import React from 'react';

import mirror_qrcode from "src/assets/source/SDUMirror_qrcode.png"
import sna_qrcode from "src/assets/source/sna_qrcode.jpg"
import oops_qrcode from "src/assets/source/oops_qrcode.jpg"

function Footer() {
    const theYear = 2025 //记得及时更新呀

    return (
        <div>
            <div className="text-[#939393] mb-4 md:flex md:max-w-[1280px] xl:mx-auto">
                <div className="md:basis-3/5 md:max-w-[600px] md:pr-8">
                    <div className="text-3xl font-bold my-3">关于本站</div>
                    <div className="pb-2">山东大学镜像站是由山东大学（青岛）学生 Oops
                        计算机社团在山东大学（青岛）信息化工作办公室指导下立项，由山东大学（青岛）网管会镜像站学生运营团队运营的开源镜像站平台。
                    </div>
                    <div className="pb-2">本镜像站为技术爱好者、工程师、科研人员等开源爱好者提供开源软件镜像服务，致力于打造以山东大学为中心的开源爱好者社区，提高山东大学影响力。</div>
                </div>

                <div className="md:mx-auto">
                    <div className="text-3xl font-bold my-3">联系我们</div>
                    <div className="flex justify-items-start">
                        <div className="flex-col mr-4">
                            <img src={mirror_qrcode} alt="mirror_qrcode" className="block mx-auto max-w-full select-none"/>
                            <div className="text-center text-sm md:text-base">镜像站开放群</div>
                        </div>
                        <div className="flex-col mx-4">
                            <img src={sna_qrcode} alt="sna_qrcode" className="block mx-auto max-w-full select-none"/>
                            <div className="text-center text-sm md:text-base">山大青岛网管会</div>
                        </div>
                        {/*<div className="flex-col ml-4">*/}
                        {/*    <img src={oops_qrcode} alt={"oops_qrcode"} className="block mx-auto max-w-full select-none"/>*/}
                        {/*    <div className="text-center text-sm md:text-base">Oops计算机社团</div>*/}
                        {/*</div>*/}
                    </div>

                </div>
            </div>
            <div className="max-w-[400px] mx-auto">
                <span className="mr-4 whitespace-nowrap">© 2019-{theYear} 山东大学镜像站</span>
                <a href="https://beian.miit.gov.cn"  className="text-blue-500 whitespace-nowrap hover:text-blue-500 hover:opacity-50 duration-200">鲁ICP备05001952号-1</a>
            </div>
        </div>
    );
}

export default Footer;