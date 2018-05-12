## Fine tuning your development setup

#### Manual Partitions and Bootloader location

If you have more than one installation on your system, often the
autoresize option won\'t be available. Or you want control over where
your new install goes. Use the Something Else option and you will be
shown a list of disks and partitions on your system, with any
unallocated space shown as such.

You can create partitions or edit existing partition sizes until you
have a new partition available to install too.

The following runs through using the installer to create a new partition
and then install to it.

Once at the Something Else window, select the existing partition you
wish to resize and then the Change button - set the partition size you
wish to keep for this partition.

![](images/qa/edit.png)

Now, select the resulting freespace

![](images/qa/postedit.png)

Press the + button to create your new partition

![](images/qa/newpartition.png)

Now you can use the Change button to set the mount point for your new
installation.

![](images/qa/setmount.png)

Once you have done that you can continue with your installation using
your new partition.

In this scenario - grub (the bootloader) will be installed to the disk
from your new installation.

There are times when this is not what you want. If for instance you are
resizing your main install and want that to keep control of your
bootloader.

This can be done by changing the bootloader device.

Press `Device for bootloader installation` and a drop down will appear
showing your available partitions. Choose the device which corresponds
to the installation, in this example /dev/sda2 and then continue the
installation

![](images/qa/bootloader.png)

Once the installation has finished you can reboot as is normal, however
in this case there is no way yet to boot into your new installation as
your main bootloader doesn\'t know about it yet.

Login to your main installation, open a terminal and run this command
(this updates Grub and finds all systems it can boot)

`sudo update-grub`

![](images/qa/grubupdate.png)

Reboot the machine again and your new installation will now be available
in Grub.

![](images/qa/newgrub.png)

#### Adding an ISO to Grub

Sometimes you might find it easier to have the development ISO available
as an option in your Grub menu.

This will work just like booting the ISO on a USB except all you can do
is run the live session - on your hardware - without being able to
install it.

To do this you need to copy your ISO somewhere that it can be found by
grub.

The following are examples of the setup a member of the QA Team uses.

They keep their ISO in /boot/grubiso - a folder they created for this
purpose.

To allow for the functionality, you need to edit a system file -
/etc/grub.d/40_custom. To edit the file, Alt+F2 then use this command to
edit the file as root `pkexec mousepad /etc/grub.d/40_custom`

It is important that the default top lines of this file are not changed.

The following content works for the QA member because, the location of
the ISO file (grubiso) and the hard drive setting (hd0,5) are correct
for them. You need to input your ISO location and hd setting. The
remaining parts should then work for you.

They have 2 options available on their grub menu, one boots the ISO
directly, the second loads the ISO into RAM and then boots from there.

    menuentry "Cosmic Cuttlefish 64" {
          set isofile="/boot/grubiso/xubuntu-cosmic-desktop-amd64.iso"
          loopback loop (hd0,5)$isofile
          linux (loop)/casper/vmlinuz.efi boot=casper iso-scan/filename=$isofile noprompt noswap noeject
          initrd (loop)/casper/initrd.lz
    }

    menuentry "Cosmic Cuttlefish 64 ram" {
          set isofile="/boot/grubiso/xubuntu-cosmic-desktop-amd64.iso"
          loopback loop (hd0,5)$isofile
          linux (loop)/casper/vmlinuz.efi toram maybe-ubiquity boot=casper iso-scan/filename=$isofile noprompt noswap noeject
          initrd (loop)/casper/initrd.lz
    }

Once the file has been edited and saved, you must update grub to include
your new ISO options, `sudo update-grub`, when you reboot you should now
see them on your Grub menu

![](images/qa/newgrub.png)
