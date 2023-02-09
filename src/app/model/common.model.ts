export class Common {
    Id:number=0;
    FirstName:string;
    Surname:string;
    EMail:string;
    MobileNo:string;
    CountryCode:string;
    Description:string;
}
export class ContactData{
    Id:number;
    FirstName:string='';
    Surname:string;
    EMail:string;
    MobileNo:string;
    CountryCode:string;
    Description:string;

}
export class ContactViewInfo{
    ContactInfo: ContactData ;
    IsSaved:boolean=false;
    Message:string='';
    IsMailSent:boolean=false;
    
}
export class FileInfo{
    Url:string;
    GalaryId:number;
    Description:string;
    FileId:number;
    FileInfo:GallaryFileInfo;
}
export class GallaryFileInfo {
    FileId:number;
    UserDocumentId:number;
    UserId:number;
    FileName:string;
    FilePath:string;
    CroppedFilepath:string;
    CroppedContentString:string;
    OriginalContentString:string;
    FileType:string;
    FileTypeId:number;
    FileHeader:string;
    Rotate:string;
    FileUploadName:string;
    FileSize:number;
    Description:string;
    FileOrder:number;
    IsActive:boolean;
}