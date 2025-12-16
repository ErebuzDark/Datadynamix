import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

const Footer = () => (
  <footer className="bg-foreground text-white py-16 px-6">
    <div className="max-w-7xl mx-auto">
      {/* Main Footer Content */}
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Logo and Tagline */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div>
              <img src="./datadynamixlogo.png" alt="datadynamix-logo" className="w-16 h-auto" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white text-nowrap">Datadynamix Technologies LLC</h3>
            </div>
          </div>
          <p className="text-white/80 mb-2">B2B Cloud Software and Systems</p>
          <p className="text-white/60 text-sm leading-relaxed">
            Serving clients in the United States and Southeast Asia
          </p>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-white">Address</h4>
          <div className="flex items-start gap-3 text-white/80">
            <EnvironmentOutlined className="text-primary text-xl mt-1 flex-shrink-0" />
            <div className="text-sm leading-relaxed">
              8/F Platinum 2000 Bldg., #7
              <br />
              Annapolis St., Greenhills
              <br />
              San Juan City 1502
            </div>
          </div>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-white">Contacts</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <MailOutlined className="text-primary text-lg flex-shrink-0" />
              <a href="mailto:info@datadynamix.com.ph" className="text-sm">
                info@datadynamix.com.ph
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <PhoneOutlined className="text-primary text-lg flex-shrink-0" />
              <a href="tel:+63282949360" className="text-sm">
                +632-8294-9360
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 pt-8">
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60 mb-6">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/40 text-sm">
          © Copyright {new Date().getFullYear()} Datadynamix Technologies LLC. All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
