export class Common {
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