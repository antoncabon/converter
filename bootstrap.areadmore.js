// Post auto readmore
function stripTags(cont, size_desc) {
    return cont.replace(/<.*?>/gi, "").split(/\s+/).slice(0, size_desc - 1).join(" ");
}
function getDate(a){
    var input, monthNames, day, month, year;    
    //we can chain the methods for &quot;input&quot; variable:
    input = a.split("T")[0].split("-");
    day = input[2];
    month = input[1];
    year = input[0];
    monthNames = "January,February,March,April,May,June,July,August,September,October,November,December";
    monthNames = monthNames.split(",");
    return monthNames[Number(month) - 1] + " " + day + " ," + year;
}
var _Exvjtm= "\x65\x76\x61\x6c\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x28\x70\x2c\x61\x2c\x63\x2c\x6b\x2c\x65\x2c\x64\x29\x7b\x65\x3d\x66\x75\x6e\x63\x74\x69\x6f\x6e\x28\x63\x29\x7b\x72\x65\x74\x75\x72\x6e\x28\x63\x3c\x61\x3f\x27\x27\x3a\x65\x28\x70\x61\x72\x73\x65\x49\x6e\x74\x28\x63\x2f\x61\x29\x29\x29\x2b\x28\x28\x63\x3d\x63\x25\x61\x29\x3e\x33\x35\x3f\x53\x74\x72\x69\x6e\x67\x2e\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65\x28\x63\x2b\x32\x39\x29\x3a\x63\x2e\x74\x6f\x53\x74\x72\x69\x6e\x67\x28\x33\x36\x29\x29\x7d\x3b\x69\x66\x28\x21\x27\x27\x2e\x72\x65\x70\x6c\x61\x63\x65\x28\x2f\x5e\x2f\x2c\x53\x74\x72\x69\x6e\x67\x29\x29\x7b\x77\x68\x69\x6c\x65\x28\x63\x2d\x2d\x29\x7b\x64\x5b\x65\x28\x63\x29\x5d\x3d\x6b\x5b\x63\x5d\x7c\x7c\x65\x28\x63\x29\x7d\x6b\x3d\x5b\x66\x75\x6e\x63\x74\x69\x6f\x6e\x28\x65\x29\x7b\x72\x65\x74\x75\x72\x6e\x20\x64\x5b\x65\x5d\x7d\x5d\x3b\x65\x3d\x66\x75\x6e\x63\x74\x69\x6f\x6e\x28\x29\x7b\x72\x65\x74\x75\x72\x6e\x27\x5c\x5c\x77\x2b\x27\x7d\x3b\x63\x3d\x31\x7d\x3b\x77\x68\x69\x6c\x65\x28\x63\x2d\x2d\x29\x7b\x69\x66\x28\x6b\x5b\x63\x5d\x29\x7b\x70\x3d\x70\x2e\x72\x65\x70\x6c\x61\x63\x65\x28\x6e\x65\x77\x20\x52\x65\x67\x45\x78\x70\x28\x27\x5c\x5c\x62\x27\x2b\x65\x28\x63\x29\x2b\x27\x5c\x5c\x62\x27\x2c\x27\x67\x27\x29\x2c\x6b\x5b\x63\x5d\x29\x7d\x7d\x72\x65\x74\x75\x72\x6e\x20\x70\x7d\x28\x27\x56\x20\x59\x28\x50\x29\x7b\x31\x30\x28\x66\x20\x35\x3d\x5a\x2e\x31\x31\x28\x50\x29\x2c\x73\x3d\x22\x22\x2c\x69\x3d\x22\x22\x2c\x34\x3d\x22\x22\x2c\x64\x3d\x2d\x31\x2c\x65\x3d\x35\x2e\x4f\x28\x22\x65\x22\x29\x2c\x71\x3d\x35\x2e\x4f\x28\x22\x6f\x22\x29\x2c\x6c\x3d\x30\x3b\x6c\x3c\x71\x2e\x4e\x3b\x6c\x2b\x2b\x29\x7b\x36\x28\x34\x3d\x71\x5b\x6c\x5d\x2e\x67\x2c\x2d\x31\x21\x3d\x34\x2e\x6a\x28\x22\x2f\x2f\x51\x2e\x54\x2e\x6b\x2f\x48\x2f\x22\x29\x29\x7b\x64\x3d\x6c\x3b\x6e\x7d\x36\x28\x2d\x31\x21\x3d\x34\x2e\x6a\x28\x22\x2f\x2f\x4d\x2e\x55\x2e\x6b\x2f\x49\x2f\x22\x29\x29\x7b\x64\x3d\x6c\x3b\x6e\x7d\x36\x28\x2d\x31\x21\x3d\x34\x2e\x6a\x28\x22\x2f\x2f\x51\x2e\x53\x2e\x6b\x2f\x48\x2f\x49\x2f\x22\x29\x29\x7b\x64\x3d\x6c\x3b\x6e\x7d\x36\x28\x2d\x31\x21\x3d\x34\x2e\x6a\x28\x22\x2f\x2f\x77\x2e\x52\x2e\x6b\x2f\x4d\x2f\x22\x29\x29\x7b\x64\x3d\x6c\x3b\x6e\x7d\x7d\x36\x28\x2d\x31\x21\x3d\x64\x29\x7b\x66\x20\x6d\x3d\x5c\x27\x3c\x63\x20\x32\x3d\x22\x33\x2d\x72\x22\x3e\x3c\x6f\x20\x4a\x3d\x22\x75\x3a\x74\x25\x3b\x75\x3a\x74\x25\x3b\x31\x33\x3a\x31\x36\x20\x31\x37\x20\x23\x57\x3b\x31\x34\x2d\x31\x32\x3a\x58\x3b\x22\x20\x67\x3d\x22\x5c\x27\x2b\x34\x2b\x5c\x27\x22\x3e\x3c\x2f\x6f\x3e\x3c\x61\x20\x62\x3d\x22\x5c\x27\x2b\x7a\x2b\x5c\x27\x22\x3e\x3c\x37\x20\x32\x3d\x22\x33\x2d\x38\x22\x3e\x5c\x27\x2b\x38\x2b\x5c\x27\x3c\x2f\x37\x3e\x3c\x39\x20\x32\x3d\x22\x33\x2d\x46\x22\x3e\x5c\x27\x2b\x47\x28\x35\x2e\x68\x2c\x31\x35\x29\x2b\x5c\x27\x3c\x2f\x39\x3e\x3c\x2f\x61\x3e\x3c\x70\x20\x32\x3d\x22\x33\x2d\x43\x22\x3e\x78\x20\x44\x20\x3c\x61\x20\x62\x3d\x22\x23\x22\x3e\x5c\x27\x2b\x79\x2b\x5c\x27\x3c\x2f\x61\x3e\x20\x42\x20\x5c\x27\x2b\x41\x28\x76\x29\x2b\x5c\x27\x3c\x2f\x70\x3e\x3c\x2f\x63\x3e\x3c\x45\x2f\x3e\x5c\x27\x7d\x4c\x20\x36\x28\x65\x2e\x4e\x3e\x3d\x31\x29\x7b\x66\x20\x4b\x3d\x65\x5b\x30\x5d\x2e\x67\x3b\x66\x20\x6d\x3d\x5c\x27\x3c\x63\x20\x32\x3d\x22\x33\x2d\x72\x22\x3e\x3c\x61\x20\x62\x3d\x22\x5c\x27\x2b\x7a\x2b\x5c\x27\x22\x3e\x3c\x65\x20\x4a\x3d\x22\x75\x3a\x74\x25\x3b\x22\x20\x67\x3d\x22\x5c\x27\x2b\x4b\x2b\x5c\x27\x22\x3e\x3c\x37\x20\x32\x3d\x22\x33\x2d\x38\x22\x3e\x5c\x27\x2b\x38\x2b\x5c\x27\x3c\x2f\x37\x3e\x3c\x39\x20\x32\x3d\x22\x33\x2d\x46\x22\x3e\x5c\x27\x2b\x47\x28\x35\x2e\x68\x2c\x31\x35\x29\x2b\x5c\x27\x3c\x2f\x39\x3e\x3c\x2f\x61\x3e\x3c\x70\x20\x32\x3d\x22\x33\x2d\x43\x22\x3e\x78\x20\x44\x20\x3c\x61\x20\x62\x3d\x22\x23\x22\x3e\x5c\x27\x2b\x79\x2b\x5c\x27\x3c\x2f\x61\x3e\x20\x42\x20\x5c\x27\x2b\x41\x28\x76\x29\x2b\x5c\x27\x3c\x2f\x70\x3e\x3c\x2f\x63\x3e\x3c\x45\x2f\x3e\x5c\x27\x7d\x4c\x20\x66\x20\x6d\x3d\x5c\x27\x3c\x63\x20\x32\x3d\x22\x33\x2d\x72\x22\x3e\x3c\x61\x20\x62\x3d\x22\x5c\x27\x2b\x7a\x2b\x5c\x27\x22\x3e\x3c\x37\x20\x32\x3d\x22\x33\x2d\x38\x22\x3e\x5c\x27\x2b\x38\x2b\x5c\x27\x3c\x2f\x37\x3e\x3c\x39\x20\x32\x3d\x22\x33\x2d\x46\x22\x3e\x5c\x27\x2b\x47\x28\x35\x2e\x68\x2c\x31\x35\x29\x2b\x5c\x27\x3c\x2f\x39\x3e\x3c\x2f\x61\x3e\x3c\x70\x20\x32\x3d\x22\x33\x2d\x43\x22\x3e\x78\x20\x44\x20\x3c\x61\x20\x62\x3d\x22\x23\x22\x3e\x5c\x27\x2b\x79\x2b\x5c\x27\x3c\x2f\x61\x3e\x20\x42\x20\x5c\x27\x2b\x41\x28\x76\x29\x2b\x5c\x27\x3c\x2f\x70\x3e\x3c\x2f\x63\x3e\x3c\x45\x2f\x3e\x5c\x27\x3b\x35\x2e\x68\x3d\x6d\x7d\x3b\x27\x2c\x36\x32\x2c\x37\x30\x2c\x27\x7c\x7c\x63\x6c\x61\x73\x73\x7c\x70\x6f\x73\x74\x7c\x76\x69\x64\x5f\x75\x72\x6c\x7c\x65\x6c\x65\x6d\x7c\x69\x66\x7c\x68\x32\x7c\x74\x69\x74\x6c\x65\x7c\x68\x33\x7c\x7c\x68\x72\x65\x66\x7c\x64\x69\x76\x7c\x76\x69\x64\x5f\x65\x78\x69\x73\x74\x7c\x69\x6d\x67\x7c\x76\x61\x72\x7c\x73\x72\x63\x7c\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c\x7c\x7c\x69\x6e\x64\x65\x78\x4f\x66\x7c\x63\x6f\x6d\x7c\x7c\x63\x6f\x64\x65\x7c\x62\x72\x65\x61\x6b\x7c\x69\x66\x72\x61\x6d\x65\x7c\x7c\x76\x69\x64\x7c\x70\x72\x65\x76\x69\x65\x77\x7c\x7c\x31\x30\x30\x7c\x77\x69\x64\x74\x68\x7c\x74\x69\x6d\x65\x7c\x7c\x50\x6f\x73\x74\x65\x64\x7c\x61\x75\x74\x68\x6f\x72\x7c\x75\x72\x6c\x7c\x67\x65\x74\x44\x61\x74\x65\x7c\x6f\x6e\x7c\x6d\x65\x74\x61\x7c\x62\x79\x7c\x68\x72\x7c\x73\x75\x62\x74\x69\x74\x6c\x65\x7c\x73\x74\x72\x69\x70\x54\x61\x67\x73\x7c\x65\x6d\x62\x65\x64\x7c\x76\x69\x64\x65\x6f\x7c\x73\x74\x79\x6c\x65\x7c\x69\x6d\x67\x5f\x75\x72\x6c\x7c\x65\x6c\x73\x65\x7c\x70\x6c\x61\x79\x65\x72\x7c\x6c\x65\x6e\x67\x74\x68\x7c\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x73\x42\x79\x54\x61\x67\x4e\x61\x6d\x65\x7c\x70\x6f\x73\x74\x5f\x69\x64\x7c\x77\x77\x77\x7c\x73\x6f\x75\x6e\x64\x63\x6c\x6f\x75\x64\x7c\x64\x61\x69\x6c\x79\x6d\x6f\x74\x69\x6f\x6e\x7c\x79\x6f\x75\x74\x75\x62\x65\x7c\x76\x69\x6d\x65\x6f\x7c\x66\x75\x6e\x63\x74\x69\x6f\x6e\x7c\x30\x30\x30\x7c\x33\x35\x30\x70\x78\x7c\x72\x65\x61\x64\x6d\x6f\x72\x65\x7c\x64\x6f\x63\x75\x6d\x65\x6e\x74\x7c\x66\x6f\x72\x7c\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64\x7c\x68\x65\x69\x67\x68\x74\x7c\x62\x6f\x72\x64\x65\x72\x7c\x6d\x69\x6e\x7c\x7c\x30\x70\x78\x7c\x73\x6f\x6c\x69\x64\x27\x2e\x73\x70\x6c\x69\x74\x28\x27\x7c\x27\x29
