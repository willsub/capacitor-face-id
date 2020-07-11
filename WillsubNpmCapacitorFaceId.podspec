
  Pod::Spec.new do |s|
    s.name = 'WillsubNpmCapacitorFaceId'
    s.version = '3.0.2'
    s.summary = 'Foo'
    s.license = 'MIT'
    s.homepage = 'https://github.com/willsub/capacitor-face-id'
    s.authors = { 'Daniel Sogl' => 'mytechde@outlook.com', 'Aparajita Fishman' => 'aparajita@aparajita.com' }
    s.source = { :git => 'https://github.com/willsub/capacitor-face-id', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end
