import { declared, property, subclass } from "esri/core/accessorSupport/decorators";
import { renderable, tsx } from "esri/widgets/support/widget";
import GlTFWidget from './GlTFWidget';

enum CampingWidgetLinks {
    Tent = "http://storage.googleapis.com/rfk-community-storage.appspot.com/tent.zip",
    Campfire = "https://sketchfab-prod-media.s3.amazonaws.com/archives/fb573067b02f49e193e293b6112e7712/gltf/30a821c2541a4822b7c11a45d1fdd2ea/campfire.zip?Expires=1571013658&AWSAccessKeyId=ASIAZ4EAQ242LK2XIESF&x-amz-security-token=AgoJb3JpZ2luX2VjECgaCWV1LXdlc3QtMSJGMEQCIBkPLyjIEHZViUewUVR1ImKmT9N1euCuHybj1jhZhCiNAiArVQ3clvddaHtpVPOuargWVWRUQmAlWi9FtAmx5C%2F90iraAwghEAAaDDY3ODg3NDM3MTg5MiIMaLVEGkK01w0m4yjGKrcDx6Dwa0KUTLtu7itOtG2NzipLX6C1ZIwbs%2BL2XQ96cTKbH3q%2FZ0COlmaLgzk9J%2FbkoUvccEj0FEcLB1aq3YJPrmbj0RvjVMadygZhZnwCkZ7qTJsVHtTK5c8q5auCuelh1mR478Tql%2FvvHx8xdDADSuBUgRprJUZZRd3Bp7G1QTa4ENyAWyip7WMEsTfIuX4ArJMyBuL0Ab476fkQlQE0lPR%2BGq3PRLqVx1Fx5%2BX06BW8qoTxymWlezC%2FTE5%2B877r3xOBApyzp7Rue%2FwaQh0tBoe%2Fksj6oJ8ocQQsGNeWCiXWWe7mJBa3M8CTBo7wPqiYsdFTG%2BDt6U6B4rPtt9K36bz5YoK8CJCYoI%2FM1ECIFoi9PtdoWhZKCBNVZa1FB9uf%2F%2FZ1p3i4E0MDjAeVRhWTJpWY1tNbRJd81iz38qBx6alODFqTqv90wpE0c1f0x%2FJDQSygDtIXGjSaFGKbPgDpwZkZm3dlPYkWutdVkIkdR%2B5zFweF78IMgKuyY1SDY5cf86oZBt17yyTos1rSEbFWz6RC4fPAfQOE6tykDUGvdWnpUT1VDX6IppG6OCMxqY2kLwYQ1nUzQzCi5o7tBTq1ASPxlgdd%2FhDs345VoYfgdJiEWz2p38Z2OxNTt5x%2BNJXVAc9ncfJ0DjH6zTWvaeyghx1XNLeWCydFMoVbDCPbAvLkXfvEBLRyxRBvLcZm4TVBQTGoftLk003bJYyepP9lNogfETtkjZjuFDZiYthzg6WdR8FFAa57z1K8m4SgMNhbm9%2Bi7%2B4QNPhHDsJySfh0f9N16EuNJZQaZCLYF9oFlv5Xzv%2FoMHsHLRN6fvzdexOZaR6PcX0%3D&Signature=jydoH1ZvhR50pcPhK8VzpvLbHLA%3D",
    Bear = "https://sketchfab-prod-media.s3.amazonaws.com/archives/fb573067b02f49e193e293b6112e7712/gltf/30a821c2541a4822b7c11a45d1fdd2ea/campfire.zip?Expires=1571013658&AWSAccessKeyId=ASIAZ4EAQ242LK2XIESF&x-amz-security-token=AgoJb3JpZ2luX2VjECgaCWV1LXdlc3QtMSJGMEQCIBkPLyjIEHZViUewUVR1ImKmT9N1euCuHybj1jhZhCiNAiArVQ3clvddaHtpVPOuargWVWRUQmAlWi9FtAmx5C%2F90iraAwghEAAaDDY3ODg3NDM3MTg5MiIMaLVEGkK01w0m4yjGKrcDx6Dwa0KUTLtu7itOtG2NzipLX6C1ZIwbs%2BL2XQ96cTKbH3q%2FZ0COlmaLgzk9J%2FbkoUvccEj0FEcLB1aq3YJPrmbj0RvjVMadygZhZnwCkZ7qTJsVHtTK5c8q5auCuelh1mR478Tql%2FvvHx8xdDADSuBUgRprJUZZRd3Bp7G1QTa4ENyAWyip7WMEsTfIuX4ArJMyBuL0Ab476fkQlQE0lPR%2BGq3PRLqVx1Fx5%2BX06BW8qoTxymWlezC%2FTE5%2B877r3xOBApyzp7Rue%2FwaQh0tBoe%2Fksj6oJ8ocQQsGNeWCiXWWe7mJBa3M8CTBo7wPqiYsdFTG%2BDt6U6B4rPtt9K36bz5YoK8CJCYoI%2FM1ECIFoi9PtdoWhZKCBNVZa1FB9uf%2F%2FZ1p3i4E0MDjAeVRhWTJpWY1tNbRJd81iz38qBx6alODFqTqv90wpE0c1f0x%2FJDQSygDtIXGjSaFGKbPgDpwZkZm3dlPYkWutdVkIkdR%2B5zFweF78IMgKuyY1SDY5cf86oZBt17yyTos1rSEbFWz6RC4fPAfQOE6tykDUGvdWnpUT1VDX6IppG6OCMxqY2kLwYQ1nUzQzCi5o7tBTq1ASPxlgdd%2FhDs345VoYfgdJiEWz2p38Z2OxNTt5x%2BNJXVAc9ncfJ0DjH6zTWvaeyghx1XNLeWCydFMoVbDCPbAvLkXfvEBLRyxRBvLcZm4TVBQTGoftLk003bJYyepP9lNogfETtkjZjuFDZiYthzg6WdR8FFAa57z1K8m4SgMNhbm9%2Bi7%2B4QNPhHDsJySfh0f9N16EuNJZQaZCLYF9oFlv5Xzv%2FoMHsHLRN6fvzdexOZaR6PcX0%3D&Signature=jydoH1ZvhR50pcPhK8VzpvLbHLA%3D"
}

@subclass("app.draw.GlTFWidget")
export default class CampingWidget extends declared(GlTFWidget) {

    @renderable()
    public render() {
        const inactive = "btn btn-large";
        const active = inactive + " active";

        return (
            <div id='camping-widget-container'>
                <div class="menu">
                    {
                        Object.keys(CampingWidgetLinks).map(key => (
                            <div class="menu-item">
                                <button class={active}
                                    onclick={this.importGlTF.bind(this, CampingWidgetLinks[key])}
                                > Add {key}</button>
                            </div>
                        ))
                    }
                </div >
            </div>
        )
    }
}