class QR
  def self.generate(string)
    qr = RQRCode::QRCode.new(string, size: 7, level: :h )
    png = qr.to_img
    png.resize(250, 250)
       .save("#{APP_PATH}/public/qr_codes/#{string}.png")
  end
end
