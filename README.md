# WEB77

- Khi nào cần dùng params:
  Chỉ nên dùng 1 params là id của rsc.
- Khi nào dùng query:
  Khi có nhiều tham số cần truyền vào, nhưng các tham số không cần bảo mật.
  VD: tìm kiếm, sắp xếp, phân trang, lọc dữ liệu, ...
- Khi nào dùng body:
  Khi cần bảo mật thông tin.
  Khi cần truyền nhiều tham số vào server.
- Các phương thức:
  read - get
  create - post
  update - put
  delete - delete
- filter -> trả về hàm.
- find -> trả về object.

MongoDB:

- Username: PAKouzo
- Password: XS9DXehkMXK1fjlM
  const connectStr = 'mongodb+srv://ducftnb:<password>@cluster0.b15b4ne.mongodb.net/mindx-fullstack?retryWrites=true&w=majority&appName=Cluster0'
